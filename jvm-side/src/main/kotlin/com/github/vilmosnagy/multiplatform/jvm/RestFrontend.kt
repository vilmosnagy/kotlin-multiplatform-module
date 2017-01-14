package com.github.vilmosnagy.multiplatform.jvm

import com.github.vilmosnagy.multiplatform.DummyEntity
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.ComponentScan
import org.springframework.context.annotation.Configuration
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.EnableWebMvc
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter

/**
 * @author Vilmos Nagy  <vilmos.nagy@outlook.com>
 */
@ComponentScan(basePackages = arrayOf("com.github.vilmosnagy"))
@SpringBootApplication
open class RestFrontend

@RestController
open class EndPoint {
    companion object {
        var lastId = 0;
    }

    @ResponseBody
    @RequestMapping("/entity", method = arrayOf(RequestMethod.GET))
    open fun getEntity(): DummyEntity {
        lastId += 1
        return DummyEntity(lastId, "Hello, world")
    }

}

@Configuration
@EnableWebMvc
open class WebConfig : WebMvcConfigurerAdapter() {

    override fun addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/**")
    }
}

fun main(args: Array<String>) {
    SpringApplication.run(RestFrontend::class.java, *args)
}