package com.example.prepwise.models

import androidx.core.util.Pools
import java.time.LocalDate

class SharedSet(
    var type: String,
    var coAuthors: ArrayList<People>,
    name: String,
    level: String,
    categories: ArrayList<String>,
    access: String,
    date: LocalDate,
    questions: ArrayList<Question>,
    username: String,
    isLiked: Boolean
) : Set(name, level, categories, access, date, questions, username, isLiked)