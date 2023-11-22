import Link from "next/link";

export function Navbar() {
    return (
        <div className="navbar mx-auto">
            <div className="flex-1">
                <Link href={'/'} className={'text-xl'}>Home</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details className={'dropdown dropdown-end'}>
                            <summary>
                                Portfolio
                            </summary>
                            <ul className={"dropdown-content z-10 rounded-lg p-2 bg-base-100"}>
                                <li><Link href={'/about-me'}>About Me</Link></li>
                                <li><Link href={'/'}>Color Picker</Link></li>
                                <li><Link href={'/'}>Shopping List</Link></li>
                                <li><Link href={'/'}>JavaScript Events</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}