package com.cxist.mirror.bean

data class TokenInfo(
        val access_token: String,
        val refresh_token: String,
        val expires_in: Long
) {
    val createTimeSecond: Long = System.currentTimeMillis() / 1000
}