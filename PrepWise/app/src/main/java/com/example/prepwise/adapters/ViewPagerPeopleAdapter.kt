package com.example.prepwise.adapters

import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentActivity
import androidx.fragment.app.FragmentManager
import androidx.lifecycle.Lifecycle
import androidx.viewpager2.adapter.FragmentStateAdapter
import com.example.prepwise.fragments.FriendFragment

class ViewPagerPeopleAdapter(
    private val followingList: ArrayList<String>,
    private val followersList: ArrayList<String>,
    private val friendsList: ArrayList<String>,
    fragmentManager: FragmentManager,
    lifecycle: Lifecycle
) : FragmentStateAdapter(fragmentManager, lifecycle) {

    override fun getItemCount(): Int {
        return 3
    }

    override fun createFragment(position: Int): Fragment {
        return when (position) {
            0 -> FriendFragment.newInstance(followingList)
            1 -> FriendFragment.newInstance(followersList)
            2 -> FriendFragment.newInstance(friendsList)
            else -> FriendFragment.newInstance(followingList)
        }
    }
}
