package com.example.prepwise

import com.example.prepwise.models.Folder
import com.example.prepwise.models.Question
import com.example.prepwise.models.Set
import java.time.LocalDate

object FolderListProvider {
    val folderList = arrayListOf(
        Folder(
            name = "Mobile Development",
            sets = arrayListOf(
                Set(
                    name = "Android Basics",
                    level = "Junior",
                    categories = arrayListOf("Android", "Kotlin"),
                    access = "public",
                    date = LocalDate.of(2023, 9, 20),
                    questions = arrayListOf(Question("What is Activity?", "A UI component"), Question("What is Intent?", "An action to perform")),
                    username = "mobile_dev",
                    isLiked = true
                ),
                Set(
                    name = "iOS Fundamentals",
                    level = "Intermediate",
                    categories = arrayListOf("iOS", "Swift"),
                    access = "private",
                    date = LocalDate.of(2023, 8, 15),
                    questions = arrayListOf(Question("What is ViewController?", "UI management component in iOS"), Question("What is SwiftUI?", "A declarative UI framework")),
                    username = "ios_master",
                    isLiked = false
                )
            ),
            date = LocalDate.of(2023, 9, 25),
            isLiked = true
        ),
        Folder(
            name = "Data Science",
            sets = arrayListOf(
                Set(
                    name = "Data Analysis with Python",
                    level = "Senior",
                    categories = arrayListOf("Python", "Pandas"),
                    access = "public",
                    date = LocalDate.of(2022, 4, 10),
                    questions = arrayListOf(Question("What is DataFrame?", "A table-like data structure"), Question("What is NumPy?", "A library for numerical operations")),
                    username = "data_expert",
                    isLiked = false
                ),
                Set(
                    name = "Machine Learning Basics",
                    level = "Intermediate",
                    categories = arrayListOf("Machine Learning", "Algorithms"),
                    access = "public",
                    date = LocalDate.of(2023, 5, 8),
                    questions = arrayListOf(Question("What is a Decision Tree?", "A supervised learning algorithm"), Question("What is Overfitting?", "When the model fits training data too well")),
                    username = "ml_guru",
                    isLiked = true
                )
            ),
            date = LocalDate.of(2023, 9, 30),
            isLiked = false
        ),
        Folder(
            name = "Web Development",
            sets = arrayListOf(
                Set(
                    name = "JavaScript for Beginners",
                    level = "Junior",
                    categories = arrayListOf("JavaScript", "Web"),
                    access = "public",
                    date = LocalDate.of(2021, 7, 12),
                    questions = arrayListOf(Question("What is a function?", "A reusable block of code"), Question("What is an array?", "A collection of elements")),
                    username = "web_dev",
                    isLiked = true
                ),
                Set(
                    name = "React Advanced",
                    level = "Senior",
                    categories = arrayListOf("React", "Web"),
                    access = "private",
                    date = LocalDate.of(2023, 3, 17),
                    questions = arrayListOf(Question("What is a component?", "A reusable UI element"), Question("What is JSX?", "A syntax extension for JavaScript")),
                    username = "react_pro",
                    isLiked = false
                )
            ),
            date = LocalDate.of(2023, 10, 1),
            isLiked = true
        ),
        Folder(
            name = "Cloud Computing",
            sets = arrayListOf(
                Set(
                    name = "AWS Basics",
                    level = "Intermediate",
                    categories = arrayListOf("AWS", "Cloud"),
                    access = "public",
                    date = LocalDate.of(2022, 11, 21),
                    questions = arrayListOf(Question("What is EC2?", "A virtual server on AWS"), Question("What is S3?", "Object storage service")),
                    username = "cloud_enthusiast",
                    isLiked = false
                ),
                Set(
                    name = "Azure Fundamentals",
                    level = "Junior",
                    categories = arrayListOf("Azure", "Cloud"),
                    access = "private",
                    date = LocalDate.of(2023, 6, 12),
                    questions = arrayListOf(Question("What is Azure Blob Storage?", "Storage for unstructured data"), Question("What is Virtual Network?", "Network in Azure")),
                    username = "azure_expert",
                    isLiked = true
                )
            ),
            date = LocalDate.of(2023, 10, 5),
            isLiked = false
        ),
        Folder(
            name = "Cybersecurity",
            sets = arrayListOf(
                Set(
                    name = "Network Security Basics",
                    level = "Intermediate",
                    categories = arrayListOf("Cybersecurity", "Networks"),
                    access = "public",
                    date = LocalDate.of(2023, 1, 9),
                    questions = arrayListOf(Question("What is a firewall?", "A network security system"), Question("What is VPN?", "A virtual private network")),
                    username = "security_guru",
                    isLiked = true
                )
            ),
            date = LocalDate.of(2023, 2, 1),
            isLiked = true
        ),
        Folder(
            name = "Game Development",
            sets = arrayListOf(
                Set(
                    name = "Unity Basics",
                    level = "Junior",
                    categories = arrayListOf("Unity", "C#"),
                    access = "public",
                    date = LocalDate.of(2021, 12, 25),
                    questions = arrayListOf(Question("What is a GameObject?", "A fundamental object in Unity"), Question("What is a prefab?", "A reusable asset in Unity")),
                    username = "game_dev",
                    isLiked = false
                ),
                Set(
                    name = "Unreal Engine Advanced",
                    level = "Senior",
                    categories = arrayListOf("Unreal Engine", "C++"),
                    access = "private",
                    date = LocalDate.of(2023, 7, 22),
                    questions = arrayListOf(Question("What is a Blueprint?", "A visual scripting system in Unreal"), Question("What is LOD?", "Level of detail for rendering")),
                    username = "unreal_master",
                    isLiked = true
                )
            ),
            date = LocalDate.of(2023, 8, 20),
            isLiked = true
        ),
        Folder(
            name = "Cybersecurity",
            sets = arrayListOf(
                Set(
                    name = "Network Security Basics",
                    level = "Intermediate",
                    categories = arrayListOf("Cybersecurity", "Networks"),
                    access = "public",
                    date = LocalDate.of(2023, 1, 9),
                    questions = arrayListOf(Question("What is a firewall?", "A network security system"), Question("What is VPN?", "A virtual private network")),
                    username = "security_guru",
                    isLiked = true
                )
            ),
            date = LocalDate.of(2023, 2, 1),
            isLiked = true
        ),
        Folder(
            name = "Game Development",
            sets = arrayListOf(
                Set(
                    name = "Unity Basics",
                    level = "Junior",
                    categories = arrayListOf("Unity", "C#"),
                    access = "public",
                    date = LocalDate.of(2021, 12, 25),
                    questions = arrayListOf(Question("What is a GameObject?", "A fundamental object in Unity"), Question("What is a prefab?", "A reusable asset in Unity")),
                    username = "game_dev",
                    isLiked = false
                ),
                Set(
                    name = "Unreal Engine Advanced",
                    level = "Senior",
                    categories = arrayListOf("Unreal Engine", "C++"),
                    access = "private",
                    date = LocalDate.of(2023, 7, 22),
                    questions = arrayListOf(Question("What is a Blueprint?", "A visual scripting system in Unreal"), Question("What is LOD?", "Level of detail for rendering")),
                    username = "unreal_master",
                    isLiked = true
                )
            ),
            date = LocalDate.of(2023, 8, 20),
            isLiked = true
        )
    )

}
