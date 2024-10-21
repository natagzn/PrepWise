package com.example.prepwise.fragments

import android.content.Intent
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import com.example.prepwise.R
import com.example.prepwise.activities.NotificationActivity

class HomeFragment : Fragment() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_home, container, false)

        val notify: ImageView = view.findViewById(R.id.go_to_notify)
        notify.setOnClickListener{
            val intent = Intent(requireActivity(), NotificationActivity::class.java)
            startActivity(intent)

            requireActivity().finish()
        }

        return view
    }

}