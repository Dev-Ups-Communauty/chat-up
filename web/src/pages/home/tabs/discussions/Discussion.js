import React from 'react'

class Discussion extends React.Component{
    render() {
        const main =
            <>
                {/* message content tabulation */}
                <div className="col-3 border-left sub-tab-body">
                    {/* search bar */}
                    <div className="row border-radius-25 discussion-search-bar-content mb-2">
                        <div className='col-1'>
                            <img src="./static/images/illustrations/search.png" className="small-image-20 mt-2" alt="search"/>
                        </div>
                        <div className="col-10">
                            <input type="text" id="discussion-search-bar"/>
                        </div>
                    </div>

                    {/* message preview */}
                    <div className="row pt-3 mb-1 msg-preview-content cursor-pointer rounded-5">
                        {/* profile image */}
                        <div className='col-2'>
                            <img src="./static/images/profile_pictures/tom.png" className="msg-preview-picture small-image-50 rounded-circle" alt="Jerry"/>
                        </div>
                        <div className="col-8 pl-3">
                            {/* name */}
                            <div className="row">
                                <div className="col-12 msg-preview-name">
                                    Jerry Andrianavalona
                                </div>
                            </div>
                            {/* msg content */}
                            <div className="row">
                                <div className="col-12 msg-preview-msg">
                                    e aona lc ben
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <p className="msg-preview-hour">
                                23h:15
                                <br />
                                16/03/23
                            </p>
                        </div>
                    </div>


                    {/* message preview */}
                    <div className="row pt-3 mb-1 msg-preview-content cursor-pointer rounded-5">
                        {/* profile image */}
                        <div className='col-2'>
                            <img src="./static/images/profile_pictures/jerry.png" className="msg-preview-picture small-image-50 rounded-circle" alt="Tom"/>
                        </div>
                        <div className="col-8 pl-3">
                            {/* name */}
                            <div className="row">
                                <div className="col-12 msg-preview-name">
                                    Tom Tsila
                                </div>
                            </div>
                            {/* msg content */}
                            <div className="row">
                                <div className="col-12 msg-preview-msg">
                                    aiza ela zao
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <p className="msg-preview-hour">
                                22h:15
                                <br />
                                16/03/23
                            </p>
                        </div>
                    </div>


                    {/* message preview */}
                    <div className="row pt-3 mb-1 msg-preview-content cursor-pointer rounded-5">
                        {/* profile image */}
                        <div className='col-2'>
                            <img src="./static/images/profile_pictures/jerry.png" className="msg-preview-picture small-image-50 rounded-circle" alt="Tom"/>
                        </div>
                        <div className="col-8 pl-3">
                            {/* name */}
                            <div className="row">
                                <div className="col-12 msg-preview-name">
                                    Tom Tsila
                                </div>
                            </div>
                            {/* msg content */}
                            <div className="row">
                                <div className="col-12 msg-preview-msg">
                                    aiza ela zao
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <p className="msg-preview-hour">
                                22h:15
                                <br />
                                16/03/23
                            </p>
                        </div>
                    </div>


                    {/* message preview */}
                    <div className="row pt-3 mb-1 msg-preview-content cursor-pointer rounded-5">
                        {/* profile image */}
                        <div className='col-2'>
                            <img src="./static/images/profile_pictures/jerry.png" className="msg-preview-picture small-image-50 rounded-circle" alt="Tom"/>
                        </div>
                        <div className="col-8 pl-3">
                            {/* name */}
                            <div className="row">
                                <div className="col-12 msg-preview-name">
                                    Tom Tsila
                                </div>
                            </div>
                            {/* msg content */}
                            <div className="row">
                                <div className="col-12 msg-preview-msg">
                                    aiza ela zao
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <p className="msg-preview-hour">
                                22h:15
                                <br />
                                16/03/23
                            </p>
                        </div>
                    </div>


                    {/* message preview */}
                    <div className="row pt-3 mb-1 msg-preview-content cursor-pointer rounded-5">
                        {/* profile image */}
                        <div className='col-2'>
                            <img src="./static/images/profile_pictures/jerry.png" className="msg-preview-picture small-image-50 rounded-circle" alt="Tom"/>
                        </div>
                        <div className="col-8 pl-3">
                            {/* name */}
                            <div className="row">
                                <div className="col-12 msg-preview-name">
                                    Tom Tsila
                                </div>
                            </div>
                            {/* msg content */}
                            <div className="row">
                                <div className="col-12 msg-preview-msg">
                                    aiza ela zao
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <p className="msg-preview-hour">
                                22h:15
                                <br />
                                16/03/23
                            </p>
                        </div>
                    </div>


                    {/* message preview */}
                    <div className="row pt-3 mb-1 msg-preview-content cursor-pointer rounded-5">
                        {/* profile image */}
                        <div className='col-2'>
                            <img src="./static/images/profile_pictures/jerry.png" className="msg-preview-picture small-image-50 rounded-circle" alt="Tom"/>
                        </div>
                        <div className="col-8 pl-3">
                            {/* name */}
                            <div className="row">
                                <div className="col-12 msg-preview-name">
                                    Tom Tsila
                                </div>
                            </div>
                            {/* msg content */}
                            <div className="row">
                                <div className="col-12 msg-preview-msg">
                                    aiza ela zao
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <p className="msg-preview-hour">
                                22h:15
                                <br />
                                16/03/23
                            </p>
                        </div>
                    </div>


                    {/* message preview */}
                    <div className="row pt-3 mb-1 msg-preview-content cursor-pointer rounded-5">
                        {/* profile image */}
                        <div className='col-2'>
                            <img src="./static/images/profile_pictures/jerry.png" className="msg-preview-picture small-image-50 rounded-circle" alt="Tom"/>
                        </div>
                        <div className="col-8 pl-3">
                            {/* name */}
                            <div className="row">
                                <div className="col-12 msg-preview-name">
                                    Tom Tsila
                                </div>
                            </div>
                            {/* msg content */}
                            <div className="row">
                                <div className="col-12 msg-preview-msg">
                                    aiza ela zao
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <p className="msg-preview-hour">
                                22h:15
                                <br />
                                16/03/23
                            </p>
                        </div>
                    </div>


                    {/* message preview */}
                    <div className="row pt-3 mb-1 msg-preview-content cursor-pointer rounded-5">
                        {/* profile image */}
                        <div className='col-2'>
                            <img src="./static/images/profile_pictures/jerry.png" className="msg-preview-picture small-image-50 rounded-circle" alt="Tom"/>
                        </div>
                        <div className="col-8 pl-3">
                            {/* name */}
                            <div className="row">
                                <div className="col-12 msg-preview-name">
                                    Tom Tsila
                                </div>
                            </div>
                            {/* msg content */}
                            <div className="row">
                                <div className="col-12 msg-preview-msg">
                                    aiza ela zao
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <p className="msg-preview-hour">
                                22h:15
                                <br />
                                16/03/23
                            </p>
                        </div>
                    </div>


                    {/* message preview */}
                    <div className="row pt-3 mb-1 msg-preview-content cursor-pointer rounded-5">
                        {/* profile image */}
                        <div className='col-2'>
                            <img src="./static/images/profile_pictures/jerry.png" className="msg-preview-picture small-image-50 rounded-circle" alt="Tom"/>
                        </div>
                        <div className="col-8 pl-3">
                            {/* name */}
                            <div className="row">
                                <div className="col-12 msg-preview-name">
                                    Tom Tsila
                                </div>
                            </div>
                            {/* msg content */}
                            <div className="row">
                                <div className="col-12 msg-preview-msg">
                                    aiza ela zao
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <p className="msg-preview-hour">
                                22h:15
                                <br />
                                16/03/23
                            </p>
                        </div>
                    </div>


                    {/* message preview */}
                    <div className="row pt-3 mb-1 msg-preview-content cursor-pointer rounded-5">
                        {/* profile image */}
                        <div className='col-2'>
                            <img src="./static/images/profile_pictures/jerry.png" className="msg-preview-picture small-image-50 rounded-circle" alt="Tom"/>
                        </div>
                        <div className="col-8 pl-3">
                            {/* name */}
                            <div className="row">
                                <div className="col-12 msg-preview-name">
                                    Tom Tsila
                                </div>
                            </div>
                            {/* msg content */}
                            <div className="row">
                                <div className="col-12 msg-preview-msg">
                                    aiza ela zao
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <p className="msg-preview-hour">
                                22h:15
                                <br />
                                16/03/23
                            </p>
                        </div>
                    </div>


                    {/* message preview */}
                    <div className="row pt-3 mb-1 msg-preview-content cursor-pointer rounded-5">
                        {/* profile image */}
                        <div className='col-2'>
                            <img src="./static/images/profile_pictures/jerry.png" className="msg-preview-picture small-image-50 rounded-circle" alt="Tom"/>
                        </div>
                        <div className="col-8 pl-3">
                            {/* name */}
                            <div className="row">
                                <div className="col-12 msg-preview-name">
                                    Tom Tsila
                                </div>
                            </div>
                            {/* msg content */}
                            <div className="row">
                                <div className="col-12 msg-preview-msg">
                                    aiza ela zao
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <p className="msg-preview-hour">
                                22h:15
                                <br />
                                16/03/23
                            </p>
                        </div>
                    </div>


                    {/* message preview */}
                    <div className="row pt-3 mb-1 msg-preview-content cursor-pointer rounded-5">
                        {/* profile image */}
                        <div className='col-2'>
                            <img src="./static/images/profile_pictures/jerry.png" className="msg-preview-picture small-image-50 rounded-circle" alt="Tom"/>
                        </div>
                        <div className="col-8 pl-3">
                            {/* name */}
                            <div className="row">
                                <div className="col-12 msg-preview-name">
                                    Tom Tsila
                                </div>
                            </div>
                            {/* msg content */}
                            <div className="row">
                                <div className="col-12 msg-preview-msg">
                                    aiza ela zao
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <p className="msg-preview-hour">
                                22h:15
                                <br />
                                16/03/23
                            </p>
                        </div>
                    </div>


                    {/* message preview */}
                    <div className="row pt-3 mb-1 msg-preview-content cursor-pointer rounded-5">
                        {/* profile image */}
                        <div className='col-2'>
                            <img src="./static/images/profile_pictures/jerry.png" className="msg-preview-picture small-image-50 rounded-circle" alt="Tom"/>
                        </div>
                        <div className="col-8 pl-3">
                            {/* name */}
                            <div className="row">
                                <div className="col-12 msg-preview-name">
                                    Tom Tsila
                                </div>
                            </div>
                            {/* msg content */}
                            <div className="row">
                                <div className="col-12 msg-preview-msg">
                                    aiza ela zao
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <p className="msg-preview-hour">
                                22h:15
                                <br />
                                16/03/23
                            </p>
                        </div>
                    </div>


                    {/* message preview */}
                    <div className="row pt-3 mb-1 msg-preview-content cursor-pointer rounded-5">
                        {/* profile image */}
                        <div className='col-2'>
                            <img src="./static/images/profile_pictures/jerry.png" className="msg-preview-picture small-image-50 rounded-circle" alt="Tom"/>
                        </div>
                        <div className="col-8 pl-3">
                            {/* name */}
                            <div className="row">
                                <div className="col-12 msg-preview-name">
                                    Tom Tsila
                                </div>
                            </div>
                            {/* msg content */}
                            <div className="row">
                                <div className="col-12 msg-preview-msg">
                                    aiza ela zao
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <p className="msg-preview-hour">
                                22h:15
                                <br />
                                16/03/23
                            </p>
                        </div>
                    </div>

                </div>

                {/* message content tabulation */}
                <div className="col-6 border-left  border-primary tab">
                    content message
                </div>

                {/* profile setting tabulation */}
                <div className="col-3 border tab">
                    Profile settings
                </div>
            </>

        return (main)
    }
}

export default Discussion
