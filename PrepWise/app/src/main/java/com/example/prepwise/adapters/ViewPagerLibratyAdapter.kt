package com.example.prepwise.adapters

import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentActivity
import androidx.viewpager2.adapter.FragmentStateAdapter
import com.example.prepwise.fragments.FoldersFragment
import com.example.prepwise.fragments.QuestionSetsFragment
import com.example.prepwise.fragments.ResourcesFragment
import com.example.prepwise.fragments.SharedFragment

class ViewPagerLibratyAdapter(
    private val foldersList: ArrayList<String>,
    private val setsList: ArrayList<String>,
    private val sharedList: ArrayList<String>,
    private val resourcesList: ArrayList<String>,
    activity: FragmentActivity
) : FragmentStateAdapter(activity) {
    override fun getItemCount(): Int {
        return 4
    }

    override fun createFragment(position: Int): Fragment {
        return when (position) {
            0 -> QuestionSetsFragment.newInstance(setsList)
            1 -> FoldersFragment.newInstance(foldersList)
            2 -> SharedFragment.newInstance(sharedList)
            3 -> ResourcesFragment.newInstance(resourcesList)
            else -> QuestionSetsFragment.newInstance(setsList)
        }
    }
}
