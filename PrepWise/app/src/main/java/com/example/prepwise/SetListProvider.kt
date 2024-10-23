package com.example.prepwise

import com.example.prepwise.models.Question
import com.example.prepwise.models.Set
import java.time.LocalDate

object SetListProvider {
    val setList = arrayListOf(
        Set(
            name = "Android Development",
            level = "Junior",
            categories = arrayListOf("Android", "Kotlin"),
            access = "public",
            date = LocalDate.of(2023, 10, 1),
            questions = arrayListOf(
                Question("What is Activity?", "A component in Android"),
                Question("What is Fragment?", "Part of a UI")
            ),
            username = "dev_junior",
            isLiked = false
        ),
        Set(
            name = "Data Science Basics",
            level = "Intermediate",
            categories = arrayListOf("Data Science", "Python", "Statistics"),
            access = "private",
            date = LocalDate.of(2022, 5, 15),
            questions = arrayListOf(
                Question("What is DataFrame?", "A table-like structure in pandas"),
                Question("What is a variable?", "A container for data")
            ),
            username = "data_guru",
            isLiked = false
        ),
        Set(
            name = "Web Development with JavaScript",
            level = "Senior",
            categories = arrayListOf("JavaScript", "React"),
            access = "public",
            date = LocalDate.of(2021, 8, 30),
            questions = arrayListOf(
                Question("What is a closure?", "A function with access to outer variables"),
                Question("What is DOM?", "Document Object Model")
            ),
            username = "web_master",
            isLiked = true
        ),
        Set(
            name = "Machine Learning Fundamentals",
            level = "Intermediate",
            categories = arrayListOf("Machine Learning", "Python"),
            access = "public",
            date = LocalDate.of(2023, 2, 20),
            questions = arrayListOf(
                Question("What is overfitting?", "A modeling error due to excessive complexity."),
                Question("What is a confusion matrix?", "A table used to describe the performance of a classification model.")
            ),
            username = "ml_expert",
            isLiked = false
        ),
        Set(
            name = "iOS App Development",
            level = "Junior",
            categories = arrayListOf("iOS", "Swift"),
            access = "public",
            date = LocalDate.of(2023, 5, 10),
            questions = arrayListOf(
                Question("What is Swift?", "A powerful programming language for iOS development."),
                Question("What is UIKit?", "A framework for building user interfaces in iOS.")
            ),
            username = "ios_dev",
            isLiked = true
        ),
        Set(
            name = "iOS App Development",
            level = "Junior",
            categories = arrayListOf("iOS", "Swift"),
            access = "public",
            date = LocalDate.of(2023, 5, 10),
            questions = arrayListOf(
                Question("What is Swift?", "A powerful programming language for iOS development."),
                Question("What is UIKit?", "A framework for building user interfaces in iOS.")
            ),
            username = "ios_dev",
            isLiked = true
        )
    )
}
