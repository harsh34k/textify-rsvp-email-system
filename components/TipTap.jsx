'use client'

import '../app/styles.css'


import { Color } from '@tiptap/extension-color'
import Document from '@tiptap/extension-document'
import Dropcursor from '@tiptap/extension-dropcursor'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import ListItem from '@tiptap/extension-list-item'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

const MenuBar = ({ editor }) => {
    if (!editor) return null

    const addImage = () => {
        const url = window.prompt('Enter image URL')
        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }

    return (
        <div className="control-group">
            <div className="button-group">
                <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'is-active' : ''}>
                    Bold
                </button>
                <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''}>
                    Italic
                </button>
                <button onClick={() => editor.chain().focus().toggleStrike().run()} className={editor.isActive('strike') ? 'is-active' : ''}>
                    Strike
                </button>
                <button onClick={() => editor.chain().focus().toggleCode().run()} className={editor.isActive('code') ? 'is-active' : ''}>
                    Code
                </button>
                <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>Clear Marks</button>
                <button onClick={() => editor.chain().focus().clearNodes().run()}>Clear Nodes</button>

                {/* Headings */}
                {[1, 2, 3, 4, 5, 6].map((lvl) => (
                    <button key={lvl} onClick={() => editor.chain().focus().toggleHeading({ level: lvl }).run()} className={editor.isActive('heading', { level: lvl }) ? 'is-active' : ''}>
                        H{lvl}
                    </button>
                ))}

                <button onClick={() => editor.chain().focus().setParagraph().run()} className={editor.isActive('paragraph') ? 'is-active' : ''}>
                    Paragraph
                </button>

                {/* Lists */}
                <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive('bulletList') ? 'is-active' : ''}>
                    Bullet List
                </button>
                <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive('orderedList') ? 'is-active' : ''}>
                    Ordered List
                </button>

                {/* Others */}
                <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={editor.isActive('codeBlock') ? 'is-active' : ''}>
                    Code Block
                </button>
                <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={editor.isActive('blockquote') ? 'is-active' : ''}>
                    Blockquote
                </button>
                <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>Horizontal Rule</button>
                <button onClick={() => editor.chain().focus().setHardBreak().run()}>Hard Break</button>

                {/* Alignment */}
                {['left', 'center', 'right', 'justify'].map((align) => (
                    <button key={align} onClick={() => editor.chain().focus().setTextAlign(align).run()} className={editor.isActive({ textAlign: align }) ? 'is-active' : ''}>
                        Align {align}
                    </button>
                ))}

                {/* Image */}
                <button onClick={addImage}>Add Image</button>

                {/* Colors & highlight */}
                <button onClick={() => editor.chain().focus().setColor('#958DF1').run()} className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}>
                    Purple
                </button>
                <button onClick={() => editor.chain().focus().toggleHighlight().run()} className={editor.isActive('highlight') ? 'is-active' : ''}>
                    Highlight
                </button>

                {/* Undo / Redo */}
                <button onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
                    Undo
                </button>
                <button onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
                    Redo
                </button>
            </div>
        </div>
    )
}

const TiptapEditor = () => {
    const editor = useEditor({
        extensions: [
            Document,
            Paragraph,
            Text,
            Image,
            Dropcursor,
            Highlight,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            Color.configure({ types: [TextStyle.name, ListItem.name] }),
            TextStyle.configure({ types: [ListItem.name] }),
            StarterKit.configure({
                bulletList: { keepMarks: true, keepAttributes: false },
                orderedList: { keepMarks: true, keepAttributes: false },
            }),
            Image,
            ImageUploadNode.configure({
                accept: 'image/*',
                maxSize: MAX_FILE_SIZE,
                limit: 3,
                upload: handleImageUpload,
                onError: (error) => console.error('Upload failed:', error),
            }),
        ],
        //     content: `
        //   <h2>Welcome to the full-featured Tiptap Editor</h2>
        //   <p>You can now use <strong>formatting</strong>, <em>alignment</em>, <span style="color: #958DF1;">colors</span>, and even <mark>highlight</mark>!</p>
        //   <p>Try adding an image below.</p>
        // `,
        content: `
        <p>Click the button to upload an image.</p>
        `,
    })

    return (
        <>
            <div className="editor-container">
                <MenuBar editor={editor} />
                <EditorContent editor={editor} className="tiptap-editor" />
            </div>
        </>
    )
}

export default TiptapEditor
