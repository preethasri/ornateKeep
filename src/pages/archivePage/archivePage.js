import React from 'react';
import "./archivePage.css";
import {useTheme,useNote,useAuth} from '../../context/index'
import {MasonaryLayout,Sidebar} from '../../components/index'

const ArchivePage=()=>{
    const {
        auth: {authToken},
    }=useAuth();
    const isSidebar=useTheme();
    const {archiveList,deleteFromArchiveHandler,restoreFromArchiveHandler}=useNote();
    return(
        <>
        <Sidebar />
        <div className={isSidebar ?"notes-page margin-left-20":"notes-page"}>
            <div className='archive-page'>
                <h3>Archived Notes</h3>
                <MasonaryLayout>
                    {archiveList.length >=1 && (
                        archiveList.map((note,i)=>{
                            const {noteColor,noteDesc,tags,noteTitle,_id}=note;
                            return(
                                !note.noteInTrash && (
                                    <div key={i} className={`note ${noteColor}`}>
                                        <h3>{noteTitle}</h3>


                                      <div className='note-card-desc' dangerouslySetInnerHTML={{__html: noteDesc}} />

                                      {tags.length >0 && (
                                          <div className='label-render-div'>
                                              {
                                                  tags.map((tag,i)=>{
                                                      return(
                                                          <div key={i} className="label">
                                                              <span className='label-content'>{tag}</span>
                                                          </div>

                                                      )
                                                  })
                                              }

                                          </div>
                                      )}
                                      <div className='bottom-list'>
                                          <span className='material-icons archive-note' onClick={()=>restoreFromArchiveHandler(_id,authToken)}>unarchive

                                          </span>
                                          <span className="material-icons-outlined delete-note" onClick={()=>deleteFromArchiveHandler(_id,authToken)}>
                                              delete_outline

                                          </span>

                                      </div>

                                    
                                    </div>
                                    
                                )
                            )
                        })
                    )}
                </MasonaryLayout>
            </div>

        </div>
        </>
    )
}
export {ArchivePage}