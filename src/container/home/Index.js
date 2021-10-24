import React, {useEffect} from 'react';
import './Index.css';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import Signup from '../../../src/components/signUp/SignUp';
import Login from '../../../src/components/login/Login';
import {getProfileFetch, logoutUser} from '../../redux/Action';
import {Button, Image, Table} from "antd";
import { useHistory } from "react-router-dom";

const Home=(props)=> {
    const {
        apiData,
        getProfileFetch,
        logoutUser,
        apiImageData,
    } = props;
    console.log('apiData', apiData);

    useEffect(()=>{
        getProfileFetch()
    },[]);

    const handleClick = event => {
        event.preventDefault()
        localStorage.removeItem("token")
        // Remove the user object from the Redux store
        logoutUser()
    }
    const history = useHistory();
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Website',
            dataIndex: 'website',
            key: 'website',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => <>
                <Button type='primary'> Edit</Button>
            </>,
        },
 ];
  return (
   <div>
        <Button type='primary' onClick={()=>{history.push('/signup')}}>SignUp</Button>
        <Switch>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
        </Switch>
        <div>
            <Table dataSource={apiData} columns={columns} />
        </div>
        <br style={{backgroundColor: 'black'}} />
        <div  style={{}}>
            {apiImageData.map((item)=>{
                return(
                    <Image
                        key={item.id}
                        width={202}
                        height={200}
                        src={item.largeImageURL}
                    />
                )
            })}
        </div>

        </div>
  );
}

const mapStateToProps = state => ({
    currentUser: state.reducer.currentUser,
    apiData: state.reducer.apiData,
    apiImageData:state.reducer.apiImageData,
})

const mapDispatchToProps = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch()),
    logoutUser: () => dispatch(logoutUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);



