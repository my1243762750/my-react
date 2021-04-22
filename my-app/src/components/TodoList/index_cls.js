import React from 'react';
import todoList from './index.module.css';

export default class ToddList extends React.Component {
    state = {
        courses: [
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
        ]
    }

    add() {
        console.log('add', this.refs.input.value);
        if (!this.refs.input.value) {
            this.setState({
                courses: [...this.state.courses]
            })
            return;
        }
        this.setState({
            courses: [...this.state.courses, {
                id: this.state.courses.length + 1,
                name: this.refs.input.value
            }]
        }, () => {
            this.refs.input.value = '';
        })
        console.log('add1')
    }

    edit(index) {
        const {courses} = this.state;
        courses[index].isEdit = true;
        this.setState({
            courses
        })
    }

    save(index) {
        const value = this.refs['item' + index].value;
        const {courses} = this.state;
        courses[index].name = value;
        courses[index].isEdit = false;
        this.setState({
            courses
        })
    }

    delete(index) {
        const {courses} = this.state;
        courses.splice(index, 1);
        this.setState({
            courses
        })
    }

    // 等同于 componentWillMount，componentWillReceiveProps， componentWillUpdate
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps', props, state);
        return state;
    }

    /*componentWillMount() {
        console.log('componentWillMount');
    }*/

    render() {
        console.log('render')
        const {courses} = this.state;
        const itemClassName = [todoList.blue, todoList['margin-left-5']].join(' ');
        return (
            <div>
                <div>
                    {/*外部不能使用严格模式*/}
                    <input ref='input' type="text"/>
                    <button onClick={this.add.bind(this)}>submit</button>
                </div>
                <ul>
                    {
                        courses.map((item, index) => {
                            return <li className={todoList['flex-center-center']} key={item.id}>
                                <div>
                                    {
                                        item.isEdit
                                            ? <input ref={'item' + index} type="text" defaultValue={item.name}/>
                                            : <span>{item.name}</span>
                                    }
                                </div>
                                <div className={itemClassName} onClick={() => this.edit(index)}>edit</div>
                                <div className={itemClassName} onClick={() => this.delete(index)}>delete</div>
                                <div className={itemClassName} onClick={() => this.save(index)}>save</div>
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    /*componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps');
    }*/

    /*componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('componentWillUpdate');
    }*/

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate', nextProps, nextState, nextContext);
        console.log('shouldComponentUpdate', nextState.courses === this.state.courses);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate', prevProps, prevState);
        return 'getSnapshotBeforeUpdate';
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState, snapshot);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch', error, errorInfo);
    }
}
