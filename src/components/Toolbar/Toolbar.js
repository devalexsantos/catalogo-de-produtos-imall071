export default function Toolbar() {
    return (
        <div className="align-middle justify-content-center p-1 mt-3 rounded text-center toolbar">
            <div className="row">
                <div className="p-3">
                    <ul>
                        <li>
                            <i className="far fa-credit-card"></i>
                            <span>
                                Parcele em até 10x
                            </span>
                        </li>
                        <li>
                            <i className="fas fa-truck"></i>
                            <span>
                                Entregas p/ todo o Brasil
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}