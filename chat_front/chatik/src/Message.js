export default function Message({user,msg, time}){
    return <tr>{user + ' ' + msg + ' ' + time.slice(11,16)}</tr>
}