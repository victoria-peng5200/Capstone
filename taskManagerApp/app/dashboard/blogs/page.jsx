"use client";
import dynamic from "next/dynamic";
const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

import { generateSlug } from "./generateSlug";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";
import styles from "./blog.module.css";

export default function Blogpage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  function handleTitle(e) {
    const newTitle = e.target.value;
    setTitle(newTitle);
    const autoSlug = generateSlug(newTitle);
    setSlug(autoSlug);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const newBlog = {
      title,
      slug,
      description,
      content,
    };
    console.log(newBlog);
  }

  //Custom Tool Bar
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Write your story</h2>
      <div className={styles.blogframe}>
        {/* Blog Editor */}
        <div className={styles.blogeditor__container}>
          <h2 className={styles.blogh2}>Blog Editor</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formcontainer}>
              {/* Title */}
              <div className={styles.blogtitlecontainer}>
                <label htmlFor="title" className={styles.bloglabel}>
                  Blog Title
                </label>
                <div className={styles.bloginput}>
                  <input
                    onChange={handleTitle}
                    type="text"
                    value={title}
                    name="title"
                    id="title"
                    autoComplete="given-name"
                    className={styles.inputtitle}
                    placeholder="Type the Blog title"
                  />
                </div>
              </div>
              {/* Slug */}
              <div className={styles.blogtitlecontainer}>
                <label htmlFor="slug" className={styles.bloglabel}>
                  Blog Slug
                </label>
                <div className={styles.bloginput}>
                  <input
                    onChange={(e) => setSlug(e.target.value)}
                    type="text"
                    value={slug}
                    name="slug"
                    id="slug"
                    autoComplete="slug"
                    className={styles.sluginput}
                    placeholder="Type the Blog title"
                  />
                </div>
              </div>
              {/* Description */}
              <div className={styles.bdes}>
                <label htmlFor="description" className={styles.bloglabel}>
                  Blog Description
                </label>
                <textarea
                  id="description"
                  rows="4"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  className={styles.descriptioncontent}
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
              {/* Content */}
              <div className={styles.content}>
                <label htmlFor="content" className={styles.bloglabel}>
                  Blog Content
                </label>
                <div className={styles.quill}>
                  <QuillEditor
                    id="content"
                    theme="snow"
                    value={content}
                    onChange={handleEditorChange}
                    modules={quillModules}
                    formats={quillFormats}
                    style={{
                      backgroundColor: "#ffffff",
                      borderColor:
                        "#e7f2ff" ,
                      height: "250px",
                      width: "100%",
                      overflow: "auto",
                      marginBottom: "20px",
                    }}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className={styles.btn}>
              <Plus className={styles.plus} />
              <span>Create Blog Post</span>
            </button>
          </form>
        </div>

        {/* Blog View */}
        <div className={styles.view__container}>
          <h2 className={styles.blogh2}>Blog Pre-view</h2>
          <hr className={styles.break} />
          <div className={styles.views}>
            {/* Title */}
            <div className={styles.viewsmobile}>
              <h2 className={styles.viewh2}>Blog Title</h2>
              <div className={styles.viewbtitlecontent}>
                <p className={styles.viewbtitlecontent_t}>{title}</p>
              </div>
            </div>
            {/* Slug */}
            <div className={styles.slug}>
              <h2 className={styles.viewh2}>Blog Slug</h2>
              <div className={styles.viewbslugcontent}>
                <p>{slug}</p>
              </div>
            </div>
            {/* Description */}
            <div className={styles.viewdes}>
              <h2 className={styles.viewh2}>Blog Description</h2>
              <p className={styles.viewdescontent}>{description}</p>
            </div>
            <div className={styles.viewcontent}>
              <h2 className={styles.viewh2}>Blog Content</h2>
              <div className={styles.viewbcontent}>{parse(content)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
