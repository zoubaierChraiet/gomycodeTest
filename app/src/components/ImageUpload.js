import React,{useState} from 'react';
import { Button, Upload, message } from 'antd';

import Icon from '@ant-design/icons'

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return false;
}

const  ImageUpload = (props) => {

  const [loading,setLoading] = useState(false)

  function handleChange (info) {
    getBase64(info.file, imageUrl => {
      setLoading(false);
      props.onChange(imageUrl);
    });
  };

  function clear() {
    props.onChange('');
  };

    const uploadButton = (
      <div>
        <Icon type={loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Select</div>
      </div>
    );

    const imageUrl = props.value;

    return (
      <React.Fragment>
        <Upload
          name={props.id}
          listType="picture-card"
          className={props.className}
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={handleChange}
          disabled={props.disabled}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={props.id}
              style={{ width: '100%', height: 'auto' }}
            />
          ) : (
            (!props.disabled && uploadButton) || <div />
          )}
        </Upload>
        {!props.disabled && imageUrl && (
          <Button onClick={clear}>Delete</Button>
        )}
      </React.Fragment>
    );
  
}

export default ImageUpload;
