import { Card } from 'antd'
import UserRegister from '../Components/UserRegister'

const RegisterPage = () => {
  return (
    <div>
        <Card title={'Register'} style={{textAlign:'center'}}>
            <UserRegister/>
        </Card>
    </div>
  )
}

export default RegisterPage