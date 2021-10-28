import React from 'react';
import ListItem from './ListItem';

const List = React.memo(({students, add}) => { //search yaparken her harfe bastığımızda list i render ettiği için memo kullandık
    console.log("Rendering: List Comp!")
    return(
        <div className="list">
            <button onClick={()=>add()}>Add</button>
            {students?.map(student =>{
                return <ListItem key={student.id} student={student} add={add} />
            })}
        </div>
    )
})

export default List;