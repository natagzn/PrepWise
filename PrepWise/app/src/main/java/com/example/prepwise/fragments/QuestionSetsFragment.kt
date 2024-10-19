package com.example.prepwise.fragments

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.prepwise.R


class QuestionSetsFragment : Fragment() {

    private lateinit var setList: ArrayList<String>

    companion object {
        private const val ARG_SET_LIST = "set_list"

        fun newInstance(setList: ArrayList<String>): QuestionSetsFragment {
            val fragment = QuestionSetsFragment()
            val args = Bundle()
            args.putStringArrayList(ARG_SET_LIST, setList)
            fragment.arguments = args
            return fragment
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        arguments?.let {
            setList = it.getStringArrayList(ARG_SET_LIST) ?: arrayListOf()
        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_question_sets, container, false)
    }

}