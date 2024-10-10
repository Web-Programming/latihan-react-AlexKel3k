import Link from 'next/link';

export default function Page (){
    return(
        <div>
            <h1>This is dashboard Page</h1>
            <hr/>
            &bull; <Link href="/dashboard/users/Alexk3lek/2327250015">AlexK3lek</Link> <br/>
             &bull; <Link href="/dashboard/users/Eddo/2327250007">Eddo</Link>     
                </div>
    );
}