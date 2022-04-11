import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 72, display: 'flex', justifyContent: 'center', alignItems: "center", marginTop: 20, marginBottom: 20 }} spin />;


export const Preloader = () => {
  return <Spin indicator={antIcon} />
}