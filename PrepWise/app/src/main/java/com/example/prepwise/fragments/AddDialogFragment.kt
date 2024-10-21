package com.example.prepwise.fragments

import android.content.Intent
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.LinearLayout
import androidx.fragment.app.DialogFragment
import androidx.navigation.fragment.findNavController
import com.example.prepwise.R
import com.example.prepwise.activities.NewFolderActivity
import com.example.prepwise.activities.NewQuestionActivity
import com.example.prepwise.activities.NewResourceActivity
import com.example.prepwise.activities.NewSetActivity
import com.google.android.material.bottomsheet.BottomSheetDialogFragment

class AddDialogFragment : BottomSheetDialogFragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_add_dialog, container, false)

        val addQuestion: LinearLayout = view.findViewById(R.id.add_question)
        val addSet: LinearLayout = view.findViewById(R.id.add_set)
        val addResource: LinearLayout = view.findViewById(R.id.add_resource)
        val addFolder: LinearLayout = view.findViewById(R.id.add_folder)

        addQuestion.setOnClickListener{
            val intent = Intent(requireActivity(), NewQuestionActivity::class.java)
            startActivity(intent)
            requireActivity().finish()
        }

        addSet.setOnClickListener{
            val intent = Intent(requireActivity(), NewSetActivity::class.java)
            startActivity(intent)
            requireActivity().finish()
        }

        addResource.setOnClickListener{
            val intent = Intent(requireActivity(), NewResourceActivity::class.java)
            startActivity(intent)
            requireActivity().finish()
        }

        addFolder.setOnClickListener{
            val intent = Intent(requireActivity(), NewFolderActivity::class.java)
            startActivity(intent)
            requireActivity().finish()
        }

        return view
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setStyle(STYLE_NORMAL, R.style.FullScreenDialog)
    }

    override fun onStart() {
        super.onStart()
        dialog?.window?.setLayout(
            ViewGroup.LayoutParams.MATCH_PARENT,
            ViewGroup.LayoutParams.WRAP_CONTENT
        )
    }
}