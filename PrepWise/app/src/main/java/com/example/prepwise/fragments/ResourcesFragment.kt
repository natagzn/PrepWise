package com.example.prepwise.fragments

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.prepwise.R

class ResourcesFragment : Fragment() {

    private lateinit var resourceList: ArrayList<String>

    companion object {
        private const val ARG_PESOURCE_LIST = "resource_list"

        fun newInstance(resourceList: ArrayList<String>): ResourcesFragment {
            val fragment = ResourcesFragment()
            val args = Bundle()
            args.putStringArrayList(ARG_PESOURCE_LIST, resourceList)
            fragment.arguments = args
            return fragment
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        arguments?.let {
            resourceList = it.getStringArrayList(ARG_PESOURCE_LIST) ?: arrayListOf()
        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_resources, container, false)
    }

}