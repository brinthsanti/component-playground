import React, { useState } from "react";
import { FolderFilled, FileFilled } from "@ant-design/icons";
import useTraverseTree from './useTraverse';
import "./index.css";

const FileExplorer = ({ explorer, handleInsertion }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  })

  const handleNewFolder = (e, isFolder)=>{
     e.stopPropagation();
     setExpand(true);
     setShowInput({
        visible: true,
        isFolder
     })
  }


  const onAddFolder = (e)=>{
   if(e.keyCode === 13 && e.target.value){
    handleInsertion(explorer.id, e.target.value, showInput.isFolder)
    setShowInput({...showInput, visible: false});
   }
  }

  if (!explorer.isFolder) {
    return (
      <div className="fileName">
        <span><FileFilled /> {explorer.name}</span>
      </div>
    );
  }
  return (
    <div className="fileExplorer">
      <div className="folder" onClick={() => setExpand((ex) => !ex)}>
        <span>
          <FolderFilled style={{ color: "#f3f324" }} />
          <span className="folderName">{explorer.name}</span>
        </span>
        
        <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Add Folder</button>
            <button onClick={(e) => handleNewFolder(e, false)}>Add File</button>
        </div>
      </div>

      {
        showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? <FolderFilled style={{ color: "#f3f324" }} /> : <span><FileFilled /></span>}</span>
               <input
               onKeyDown={onAddFolder}
               className="inputContainer__input"
               autoFocus
               type='text'
               onBlur={()=> setShowInput({...showInput, visible: false})}
               />
            </div>
        )
      }
      {expand && (
        <div style={{marginLeft: '18px'}}>
          {explorer.items.map((data) => {
            return <FileExplorer 
            explorer={data} 
            key={data.id}
            handleInsertion={handleInsertion}
            />;
          })}
        </div>
      )}
    </div>
  );
};

export default FileExplorer;
