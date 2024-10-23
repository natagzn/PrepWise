package com.example.prepwise.activities

import android.content.Context
import android.os.Bundle
import android.view.View
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.fragment.app.Fragment
import com.exampl.HomeFragment
import com.example.prepwise.LocaleHelper.loadLocale
import com.example.prepwise.R
import com.example.prepwise.fragments.AddDialogFragment
import com.example.prepwise.fragments.LibraryFragment
import com.example.prepwise.fragments.LikedFragment
import com.example.prepwise.fragments.ProfileFragment
import com.example.prepwise.models.Question
import com.example.prepwise.models.Set
import com.google.android.material.bottomnavigation.BottomNavigationView
import com.google.android.material.floatingactionbutton.FloatingActionButton
import java.time.LocalDate

class MainActivity : AppCompatActivity() {

    public

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        loadLocale(this)

        val bottomNavigationView = findViewById<BottomNavigationView>(R.id.bottom_navigation)
        bottomNavigationView.visibility = View.VISIBLE

//        if(savedInstanceState==null){
//            supportFragmentManager.beginTransaction().replace(R.id.fragment_container, HomeFragment()).commit()
//        }

        // Перенаправленнян на фрагмент
        val fragmentToOpen = intent.getStringExtra("openFragment")
        if (fragmentToOpen == "ProfileFragment") replaceFragment(ProfileFragment())
        else if (fragmentToOpen == "LibratyFragment") replaceFragment(LibraryFragment())
        else if (fragmentToOpen == "LikedFragment") replaceFragment(LikedFragment())
        else replaceFragment(HomeFragment())

        // Клік на меню навігації
        bottomNavigationView.setOnNavigationItemSelectedListener { item ->
            when (item.itemId) {
                R.id.bottom_home -> {
                    intent.putExtra("openFragment", "HomeFragment")
                    replaceFragment(HomeFragment())
                    true
                }
                R.id.bottom_liked -> {
                    intent.putExtra("openFragment", "LikedFragment")
                    replaceFragment(LikedFragment())
                    true
                }
                R.id.bottom_library -> {
                    intent.putExtra("openFragment", "LibraryFragment")
                    replaceFragment(LibraryFragment())
                    true
                }
                R.id.bottom_profile -> {
                    intent.putExtra("openFragment", "ProfileFragment")
                    replaceFragment(ProfileFragment())
                    true
                }
                else -> false
            }
        }

        // Відриття меню для додавання
        val addBtn: FloatingActionButton = findViewById(R.id.add_btn)
        addBtn.setOnClickListener{
            val dialogFragment = AddDialogFragment()
            dialogFragment.show(supportFragmentManager, "CustomDialog")
        }


        // Створюємо список сетів
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
            )
        )
    }

    private fun replaceFragment(fragment: Fragment) {
        supportFragmentManager.beginTransaction()
            .replace(R.id.fragment_container, fragment)
            .commit()
    }
}