import React, { useState } from 'react';
import { FileExplorer , useTraverseTree} from '../components/FileExplorer';
import explorer from './Data/file-explorer';

const FileExplorerExamples = () => {
    const [explorerData, setExplorerData] = useState(explorer);
    const { insertNode } = useTraverseTree();

    const handleInsertion = (folderId, item, isFolder)=>{
        const finalTree = insertNode(explorerData, folderId, item, isFolder)
     setExplorerData(finalTree);
    };

    return (
        <div>
            <FileExplorer 
            explorer={explorerData}
            handleInsertion={handleInsertion}
            />        
        </div>
    );
};

export default FileExplorerExamples;