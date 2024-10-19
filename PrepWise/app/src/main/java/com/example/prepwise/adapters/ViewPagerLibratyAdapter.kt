package com.example.prepwise.adapters

import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentActivity
import androidx.viewpager2.adapter.FragmentStateAdapter
import com.example.prepwise.fragments.FoldersFragment
import com.example.prepwise.fragments.QuestionSetsFragment
import com.example.prepwise.fragments.ResourcesFragment
import com.example.prepwise.fragments.SharedFragment

class ViewPagerLibratyAdapter(activity: FragmentActivity) : FragmentStateAdapter(activity) {
    override fun getItemCount(): Int {
        return 4
    }

    override fun createFragment(position: Int): Fragment {
        return when (position) {
            0 -> QuestionSetsFragment()
            1 -> FoldersFragment()
            2 -> SharedFragment()
            3 -> ResourcesFragment()
            else -> QuestionSetsFragment()
        }
    }
}
