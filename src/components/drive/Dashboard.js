import React from 'react'
import { Container } from 'react-bootstrap'
import { useLocation, useParams } from 'react-router-dom'
import { useFolder } from '../../hooks/useFolder'
import AddFileButton from './AddFileButton'
import AddFolderButton from './AddFolderButton'
import Folder from './Folder'
import File from './File'
import FolderBreadcrumbs from './FolderBreadcrumbs'
import Navbar from './Navbar'

export default function Dashboard() {
  const { folderId } = useParams()
  const { state = {} } = useLocation()
  const { folder, childFolders, childFiles } = useFolder(folderId)
  // TODO: Find out why useLocation() is not returning anything.
  // const { folder, childFolders } = useFolder(folderId, state.folder)

  console.log("Dashboard")
  console.log("State: ", state)
  console.log("Folder: ", folder)
  console.log("childFolders: ", childFolders)
  console.log("childFolders.Length: ", childFolders.length)

  return (
    <>
      <Navbar />
      <Container fluid>
        <div className='d-flex align-items-center'>
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFileButton currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
        </div>
        {childFolders.length > 0 && (
          <div className='d-flex flex-wrap'>
            {childFolders.map(
              childFolder => (
                <div key={childFolder.id} style={{ maxWidth: "250px" }} className="p-2">
                  <Folder folder={childFolder} />
                </div>
              ))}
          </div>
        )}
        {childFolders.length > 0 && childFiles.length > 0 && <hr />}
        {childFiles.length > 0 && (
          <div className='d-flex flex-wrap'>
            {childFiles.map(
              childFile => (
                <div key={childFile.id} style={{ maxWidth: "250px" }} className="p-2">
                  <File file={childFile} />
                </div>
              ))}
          </div>
        )}
      </Container>
    </>
  )
}
