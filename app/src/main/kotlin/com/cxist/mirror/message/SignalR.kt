package com.cxist.mirror.message

import com.cxist.mirror.bean.MessageData
import com.microsoft.signalr.HubConnection
import com.microsoft.signalr.HubConnectionBuilder
import com.microsoft.signalr.TransportEnum
import io.reactivex.Single
import io.reactivex.SingleObserver
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.json.JSONObject

/**
 * author : ParfoisMeng
 * time   : 2021-03-12
 * desc   : SignalR使用类
 */
object SignalR {
    private var hubConnection: HubConnection? = null

    fun create() {
        hubConnection = HubConnectionBuilder.create(NativeHttp.SERVICE_BASE_URL + NativeHttp.SERVICE_MESSAGE)
                .withAccessTokenProvider(object : Single<String>() {
                    override fun subscribeActual(observer: SingleObserver<in String>) {
                        getTokenInfo()?.let {
                            val nowTimeSecond = System.currentTimeMillis() / 1000
                            if (nowTimeSecond - it.createTimeSecond >= it.expires_in) {
                                // 当前时间不在有效期内，启动协程异步刷新 token
                                GlobalScope.launch {
                                    val result = NativeHttp.refreshToken(it.refresh_token).body()
                                    setTokenInfo(result)
                                    observer.onSuccess(result?.access_token ?: "TokenInfo is null")
                                }
                            } else {
                                // 当前时间还在有效期内，直接返回当前 token
                                observer.onSuccess(it.access_token)
                            }
                        } ?: observer.onSuccess("TokenInfo is null")
                    }
                })
                .withTransport(TransportEnum.LONG_POLLING)
                .build()
        hubConnection?.start()?.blockingAwait()
    }

    fun listener(callback: (data: MessageData) -> Unit) {
        hubConnection?.on("messageReceived", { param: String ->
            try {
                // 取出原数据中的 Message Info
                val jo = JSONObject(param)
                val msgObj = jo.optJSONObject("message")
                val msgInfo = msgObj?.optString("info") ?: ""

                // 构造通知消息体
                val message = gson.fromJson(msgInfo, MessageData::class.java)
                callback(message)
            } catch (e: Exception) {
                callback(MessageData(content = "消息解析异常"))
            }
        }, String::class.java)
    }

    fun send(method: String, message: String) {
        hubConnection?.send(method, message)
    }

    fun destroy() {
        hubConnection?.stop()
    }
}