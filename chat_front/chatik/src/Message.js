export default function Message({msg, time}){
    return <tr>{msg + ' ' + time.slice(11,16)}</tr>
}