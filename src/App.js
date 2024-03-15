import './App.css';
import { useState } from 'react';
import { Table } from 'antd';
import { Flex } from 'antd';
import { Button } from 'antd';

function App() {
  const [inputdata, setInputdata] = useState({ firstname: "", age: "", address: "" });
  const [record, setRecord] = useState([]);
  const [isEdit, setisEdit] = useState(-1);

  const handleonchange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setInputdata({ ...inputdata, [e.target.name]: e.target.value })
  }
  const handlesubmit = () => {
    if (isEdit !== -1) {
      const updateData = record.map((value, index) => {
        if (index === isEdit) {
          return inputdata;
        }

        return value;
      });
      setRecord(updateData)
    }
    else {
      setRecord([...record, inputdata]);
    }
    setInputdata({ FirstName: "", LastName: "", Age: "" });
  }
  const handledelet = (id) => {
    console.log("delet");
    const delet = record.filter((item, index) => index !== id);
    setRecord(delet);
  }
  const handleedit = (editer) => {
    setisEdit(editer)
    let editing = record.find((item, index) => index === editer);
    console.log(editing);
    setInputdata(editing);
  }
  const columns = [

    {
      title: 'Firstname',
      dataIndex: 'firstname',
      key: 'firtname',
      render: (text) => <a href='hii'>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'button',
      dataIndex: 'button',
      key: 'button',
      render: (_, tags, index) => (
        <>
          <Flex gap="small" wrap="wrap">
            <Button onClick={() => {
              handledelet(index);
              console.log(index)
            }}>DELET</Button>

            {/* //edit// */}
            <Button onClick={() => {
              handleedit(index)
            }}>EDIT</Button>
          </Flex>
        </>
      ),
    },
  ];
  return (
    <div className="App">
      <div>
        <label htmlFor='fname'>First name:</label>
        <input type='text' id='fname' name='firstname' value={inputdata.firstname} onChange={(e) => handleonchange(e)} />
      </div>
      <div>
        <label htmlFor='age'>Age:</label>
        <input type='number' id='age' name='age' value={inputdata.age} onChange={(e) => handleonchange(e)} />
      </div>
      <div>
        <label htmlFor='address'>Address:</label>
        <input type='text' id='address' name='address' value={inputdata.address} onChange={(e) => handleonchange(e)} />
      </div>
      <div style={{ marginTop: "3%" }}>
        <button type='submit' onClick={() => handlesubmit()}>SUBMIT</button>
      </div>
      <Table columns={columns} dataSource={record}  style={{marginTop:"3%"}}/>;
      <Flex gap="small" wrap="wrap">
      </Flex>
    </div>
  );
}


export default App;
