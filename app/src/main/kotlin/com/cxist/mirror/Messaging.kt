package com.cxist.mirror

import android.content.Intent
import android.os.Build
import com.cxist.mirror.bean.Actions
import com.cxist.mirror.bean.ServiceState
import com.cxist.mirror.message.*
import com.cxist.mirror.service.MirrorMESService
import org.apache.cordova.CallbackContext
import org.apache.cordova.CordovaArgs
import org.apache.cordova.CordovaPlugin

/**
 * This class echoes a string called from JavaScript.
 */
class Messaging : CordovaPlugin() {

    override fun execute(action: String, args: CordovaArgs, callbackContext: CallbackContext): Boolean {
        try {
            when (action) {
                STARTUP -> {
                    // token
                    val tokenStr = args.optString(0)
                    setTokenInfo(tokenStr)
                    // 服务器地址
                    val baseUrlArg = args.optString(1)
                    if (baseUrlArg != NativeHttp.SERVICE_BASE_URL) {
                        // 如果SignalR地址变更，需要将原服务停止后再设置新地址，然后启动服务
                        NativeHttp.SERVICE_BASE_URL = baseUrlArg
                        actionOnService(Actions.STOP)
                    }
                    actionOnService(Actions.START)
                }
                SHUTDOWN -> {
                    setTokenInfo(infoStr = null)
                    actionOnService(Actions.STOP)
                }
                SET_TOKEN -> {
                    val tokenStr = args.optString(0)
                    setTokenInfo(tokenStr)
                }
                GET_TOKEN -> {
                    val tokenStr = getTokenInfo()?.let { gson.toJson(it) }
                    callbackContext.success(tokenStr)
                    return true
                }
            }
            callbackContext.success("$action execute successful")
            return true
        } catch (e: Exception) {
            callbackContext.error(e.message)
            return false
        }
    }

    private fun actionOnService(action: Actions) {
        if (getServiceState() == ServiceState.STOPPED && action == Actions.STOP) return

        Intent(this.cordova.context, MirrorMESService::class.java).also {
            it.action = action.name
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                log("Android O 以上需要用 startForegroundService 启动前台服务")
                this.cordova.context.startForegroundService(it)
                return
            }
            log("Android O 以下可以直接启动服务")
            this.cordova.context.startService(it)
        }
    }

    companion object {
        /**
         * 开启服务
         */
        const val STARTUP = "startup"

        /**
         * 停止服务
         */
        const val SHUTDOWN = "shutdown"

        /**
         * 存Token
         */
        const val SET_TOKEN = "setToken"

        /**
         * 取Token
         */
        const val GET_TOKEN = "getToken"
    }
}

