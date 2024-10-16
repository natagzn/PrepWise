package com.example.prepwise.fragments

import android.content.Context
import android.content.Intent
import android.content.res.Configuration
import android.os.Bundle
import android.util.Log
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.LinearLayout
import android.widget.TextView
import androidx.appcompat.app.AlertDialog
import com.example.prepwise.LocaleHelper.loadLocale
import com.example.prepwise.LocaleHelper.setLocale
import com.example.prepwise.R
import com.example.prepwise.activities.LoginActivity
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

        return view
    }

    private fun showChangeLang(){
        val listItems = arrayOf("Українська", "English")

        val mBuilder = AlertDialog.Builder(requireContext())
        mBuilder.setTitle(getString(R.string.choose_language))
        mBuilder.setSingleChoiceItems(listItems, -1){ dialog, which ->
            if(which==0){
                setLocale("uk", requireContext())
                requireActivity().recreate()}
            else if (which==1){
                setLocale("en", requireContext())
                requireActivity().recreate()}

            dialog.dismiss()
        }

        val mDialiog = mBuilder.create()
        mDialiog.show()
    }
}