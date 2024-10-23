package com.example.prepwise.models

import java.time.LocalDate
import java.util.ArrayList

open class Set(
    var name: String,
    var level: String,
    var categories: ArrayList<String>,
    var access: String,
    var date: LocalDate,
    var questions: ArrayList<Question>,
    var username: String,
    var isLiked: Boolean) {
}