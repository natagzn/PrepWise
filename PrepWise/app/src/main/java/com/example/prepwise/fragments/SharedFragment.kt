package com.example.prepwise.fragments

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.prepwise.R
class SharedFragment : Fragment() {

    private lateinit var sharedList: ArrayList<String>
    companion object {
        private const val ARG_SHARED_LIST = "shared_list"

        fun newInstance(sharedList: ArrayList<String>): SharedFragment {
            val fragment = SharedFragment()
            val args = Bundle()
            args.putStringArrayList(ARG_SHARED_LIST, sharedList)
            fragment.arguments = args
            return fragment
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        arguments?.let {
            sharedList = it.getStringArrayList(ARG_SHARED_LIST) ?: arrayListOf()
        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_shared, container, false)
    }

}