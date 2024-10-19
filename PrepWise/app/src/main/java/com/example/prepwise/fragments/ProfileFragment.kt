package com.example.prepwise.fragments

import android.annotation.SuppressLint
import android.content.Context
import android.content.Intent
import android.content.res.Configuration
import android.net.Uri
import android.os.Bundle
import android.util.Log
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.TextView
import androidx.appcompat.app.AlertDialog
import androidx.navigation.fragment.findNavController
import com.example.prepwise.LocaleHelper.loadLocale
import com.example.prepwise.LocaleHelper.setLocale
import com.example.prepwise.R
import com.example.prepwise.activities.LoginActivity
import com.example.prepwise.activities.PremiumActivity
import java.util.Locale

class ProfileFragment : Fragment() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?,
                              savedInstanceState: Bundle?): View? {
        val view = inflater.inflate(R.layout.fragment_profile, container, false)

        loadLocale(requireContext())

        // Зміна мови
        val changeLanguage: LinearLayout = view.findViewById(R.id.language)
        changeLanguage.setOnClickListener {
            showChangeLang()
        }

        // Вихід з системи
        val logOut: LinearLayout = view.findViewById(R.id.log_out)
        logOut.setOnClickListener{
            val intent = Intent(requireActivity(), LoginActivity::class.java)
            startActivity(intent)
            requireActivity().finish()
        }

        // Редагування профілю
        val editProfile: ImageView = view.findViewById(R.id.edit)
        editProfile.setOnClickListener{
            val fragmentTransaction = requireActivity().supportFragmentManager.beginTransaction()
            val targetFragment = EditProfileFragment()
            fragmentTransaction.replace(R.id.fragment_container, targetFragment)
            fragmentTransaction.addToBackStack(null)
            fragmentTransaction.commit()
        }

        // Преміум
        val goToPremium: LinearLayout = view.findViewById(R.id.premium)
        goToPremium.setOnClickListener{
            val intent = Intent(requireActivity(), PremiumActivity::class.java)
            startActivity(intent)

            requireActivity().finish()
        }

        // Лист із запитанням
        val askQuestionLayout: LinearLayout = view.findViewById(R.id.ask_a_question)
        askQuestionLayout.setOnClickListener {
            val emailIntent = Intent(Intent.ACTION_SENDTO).apply {
                data = Uri.parse("mailto:")
                putExtra(Intent.EXTRA_EMAIL, arrayOf("nahalkaanna06@gmail.com"))
                putExtra(Intent.EXTRA_SUBJECT, "Запитання")
            }
            startActivity(emailIntent)
        }



        return view
    }

    private fun showChangeLang() {
        val listItems = arrayOf("Українська", "English")

        val mBuilder = AlertDialog.Builder(requireContext())
        mBuilder.setTitle(getString(R.string.choose_language))
        mBuilder.setItems(listItems) { dialog, which ->
            when (which) {
                0 -> {
                    setLocale("uk", requireContext())
                    requireActivity().recreate()
                }
                1 -> {
                    setLocale("en", requireContext())
                    requireActivity().recreate()
                }
            }
            dialog.dismiss()
        }

        val mDialog = mBuilder.create()
        mDialog.show()
    }
}