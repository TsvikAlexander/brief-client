import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default function CreateBriefButton() {
  return (
    <div style={{ display: 'block', textAlign: 'right', marginBottom: 16 }}>
      <Link to="/admin/briefs/create">
        <Button type="primary" icon={<PlusOutlined />}>
          Створити бриф
        </Button>
      </Link>
    </div>
  );
}
