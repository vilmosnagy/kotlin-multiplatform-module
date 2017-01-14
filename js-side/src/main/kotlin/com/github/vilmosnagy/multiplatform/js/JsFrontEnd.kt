package com.github.vilmosnagy.multiplatform.js

import com.github.vilmosnagy.multiplatform.DummyEntity

/**
 * @author Vilmos Nagy  <vilmos.nagy@outlook.com>
 */


fun main(args: Array<String>) {
    val options = AjaxRequest(
            url = "http://localhost:8080/entity",
            type = HttpWord.GET,
            data = ""
    )
    return ajaxJQuery.ajax<DummyEntity>(options).done {
        println(it.id)
        println(it.name)
    }
}

data class AjaxRequest private constructor(val url: String, val type: String, val data: String) {

    constructor(url: String, type: HttpWord, data: String): this(url, type.toString(), data)

    val contentType: String = "application/json; charset=utf-8"
    val dataType: String = "json"
}

enum class HttpWord {
    GET, POST, PUT, DELETE
}

@native
interface JQAjax {
    fun <T> ajax(request: AjaxRequest): Promise<T> = noImpl
}

@native
interface Promise<T> {
    fun done(callback: (T) -> Unit): Unit = noImpl
}

@native("$") var ajaxJQuery: JQAjax = null!!