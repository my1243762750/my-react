import React, {useState, useRef} from 'react';
import todoList from "./index.module.css";

export function TodoList() {
    const [courses, setCourses] = useState([
        {
            id: 1,
            name: 'java',
            isEdit: false
        },
        {
            id: 2,
            name: 'php',
            isEdit: false
        },
        {
            id: 3,
            name: 'js',
            isEdit: false
        }
    ]);
    var add = function(val) {
        console.log('add', val);
        courses.push({
            id: courses.length + 1,
            name: val,
            isEdit: false
        });
        setCourses([...courses]);
        console.log('courses', courses);
    }

    var edit = function (index) {
        courses[index].isEdit = true;
        setCourses([...courses]);
    }

    var save = function (index, val) {
        if (!val) {
            return;
        }
        courses[index].name = val;
        courses[index].isEdit = false;
        setCourses([...courses]);
    }

    var deleteItem = function (index) {
        courses.splice(index, 1);
        setCourses([...courses]);
    }

    const itemClassName = [todoList.blue, todoList['margin-left-5']].join(' ');
    const inputRef = useRef('input');
    const itemRef = useRef(null);
    return (
        <div>
            <div>
                {/*外部不能使用严格模式*/}
                <input ref={inputRef} type="text"/>
                <button onClick={() => add(inputRef.current.value)}>submit</button>
            </div>
            <ul>
                {
                    courses.map((item, index) => {
                        return <li className={todoList['flex-center-center']} key={item.id}>
                            <div>
                                {
                                    item.isEdit
                                        ? <input ref={itemRef} type="text" defaultValue={item.name}/>
                                        : <span>{item.name}</span>
                                }
                            </div>
                            <div className={itemClassName} onClick={() => edit(index)}>edit</div>
                            <div className={itemClassName} onClick={() => deleteItem(index)}>delete</div>
                            <div className={itemClassName} onClick={() => save(index, itemRef.current.value)}>save</div>
                        </li>
                    })
                }
            </ul>
        </div>
    );
}
