export default function HeaderADM(){
    return (
    <header className="navbar pcoded-header navbar-expand-lg navbar-light header-dark">
        <div className="m-header">
            <a className="mobile-menu" id="mobile-collapse" href="#!"><span></span></a>
            <a href="{{url('/')}}" className="b-brand">
                <h1 className="text-xl font-bold text-yellow-600" >GO Film</h1>

                <img src="" alt="" className="logo-thumb"/>
            </a>
            <a href="#!" className="mob-toggler">
                <i className="feather icon-more-vertical"></i>
            </a>
        </div>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
                <li>
                    <div className="dropdown drp-user">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="feather icon-user"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right profile-notification">
                            <ul className="pro-body">
                                <li><a href="{{route('profile.index')}}" className="dropdown-item"><i className="feather icon-user"></i> Profile</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>	
    </header>
    )
}