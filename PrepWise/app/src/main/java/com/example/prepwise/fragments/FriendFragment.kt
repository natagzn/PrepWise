package com.example.prepwise.fragments

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.prepwise.R

class FriendFragment : Fragment() {

    private lateinit var list: ArrayList<String>

    companion object {
        private const val ARG_LIST = "arg_list"

        fun newInstance(list: ArrayList<String>): FriendFragment {
            val fragment = FriendFragment()
            val args = Bundle()
            args.putStringArrayList(ARG_LIST, list)
            fragment.arguments = args
            return fragment
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        arguments?.let {
            list = it.getStringArrayList(ARG_LIST) ?: arrayListOf()
        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_friend, container, false)

        // Тут відобрази список, наприклад, використовуючи RecyclerView
        /*val recyclerView: RecyclerView = view.findViewById(R.id.recyclerView)
        recyclerView.layoutManager = LinearLayoutManager(context)
        recyclerView.adapter = FriendsAdapter(list)*/

        return view
    }
}
