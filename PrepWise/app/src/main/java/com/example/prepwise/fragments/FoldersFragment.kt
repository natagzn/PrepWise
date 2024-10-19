package com.example.prepwise.fragments

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.prepwise.R


class FoldersFragment : Fragment() {

    private lateinit var folderList: ArrayList<String>

    companion object {
        private const val ARG_FOLDER_LIST = "folder_list"

        fun newInstance(folderList: ArrayList<String>): FoldersFragment {
            val fragment = FoldersFragment()
            val args = Bundle()
            args.putStringArrayList(ARG_FOLDER_LIST, folderList)
            fragment.arguments = args
            return fragment
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        arguments?.let {
            folderList = it.getStringArrayList(ARG_FOLDER_LIST) ?: arrayListOf()
        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_folders, container, false)

        // Тут ініціалізувати RecyclerView для відображення списку
        return view
    }


}
