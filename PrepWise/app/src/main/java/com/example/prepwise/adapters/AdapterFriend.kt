package com.example.prepwise.adapters

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.prepwise.R
import com.example.prepwise.models.People
import java.time.format.DateTimeFormatter

class AdapterFriend(private val friendList: ArrayList<People>, private val context: Context, val param: String) :
    RecyclerView.Adapter<AdapterFriend.SetViewHolder>() {

    // ViewHolder клас для утримання посилань на UI елементи
    class SetViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val setUsername: TextView = itemView.findViewById(R.id.username)
        val setStatus: TextView = itemView.findViewById(R.id.friend_status)
        val delete: ImageView = itemView.findViewById(R.id.delete)
        //val setUserImg: ImageView = itemView.findViewById(R.id.user_picture)
    }

    // Створюємо новий ViewHolder
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): SetViewHolder {
        val view = LayoutInflater.from(context).inflate(R.layout.item_friend, parent, false)
        return SetViewHolder(view)
    }

    // Прив'язуємо дані до ViewHolder
    override fun onBindViewHolder(holder: SetViewHolder, position: Int) {
        val friend = friendList[position]

        holder.setUsername.text = friend.username
        //holder.setUserImg.setImageResource(friend.userImg)
        holder.setStatus.text = friend.status

        if(param=="myPeople") holder.delete.visibility = View.GONE
        else holder.delete.visibility = View.VISIBLE

        holder.delete.setOnClickListener{
            friendList[position]
        }
    }

    // Повертаємо кількість елементів у списку
    override fun getItemCount(): Int {
        return friendList.size
    }
}