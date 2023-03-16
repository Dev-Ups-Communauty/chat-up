import React from 'react'
import Discussion from "./tabs/discussions/Discussion";

class Home extends React.Component{
    constructor() {
        super();
        this.state = {
            tabTitle : 'Discussions',
        }
        this.tab = this.tab.bind(this)
    }

    // changing tab
    tab = (title) => {
        this.setState({
            tabTitle : title
        })
    }

    render() {
        const mainPage =
            <div className="row">
                {/* option tabulation */}
                <div className="col-2 tab flex-column tab-option p-1">

                    {/* Discussions */}
                    <div className="mb-1 mt-1 pt-1 pb-1 tab-option-element border-radius-5 cursor-pointer"
                        onClick={ () => this.tab('Discussions') }>
                        <div className="row">
                            <div className="col-2 text-center">
                                <img src="./static/images/illustrations/message.png" className="small-image-20 ml-2" alt="discussions"/>
                            </div>
                            <div className="col-10 pt-1">
                                Discussions
                            </div>
                        </div>
                    </div>

                    {/* People */}
                    <div className="mb-1 mt-1 pt-1 pb-1 tab-option-element border-radius-5 cursor-pointer"
                         onClick={ () => this.tab('Peaople') }>
                        <div className="row">
                            <div className="col-2 text-center">
                                <img src="./static/images/illustrations/profile.png" className="small-image-20 ml-2" alt="discussions"/>
                            </div>
                            <div className="col-10 pt-1">
                                People
                            </div>
                        </div>
                    </div>


		            {/* Group */}
                    <div className="mb-1 mt-1 pt-1 pb-1 tab-option-element border-radius-5 cursor-pointer"
                        onClick={ () => this.tab('Groups') } >
                        <div className="row">
                            <div className="col-2 text-center">
                                <img src="./static/images/illustrations/groupe.png" className="small-image-20 ml-2" alt="discussions"/>
                            </div>
                            <div className="col-10 pt-1">
                                Groups
                            </div>
                        </div>
                    </div>


                    {/*Request */}
                    <div className="mb-1 mt-1 pt-1 pb-1 tab-option-element border-radius-5 cursor-pointer"
                        onClick={ () => this.tab('Request') }>
                        <div className="row">
                            <div className="col-2 text-center">
                                <img src="./static/images/illustrations/request_b.png" className="small-image-20 ml-2" alt="discussions"/>
                            </div>
                            <div className="col-10 pt-1">
                                Request
                            </div>
                        </div>
                    </div>


                    {/* GPT */}
                    <div className="mb-1 mt-1 pt-1 pb-1 tab-option-element border-radius-5 cursor-pointer"
                        onClick={ () => this.tab('GPT') }>
                        <div className="row">
                            <div className="col-2 text-center">
                                <img src="./static/images/illustrations/bot.png" className="small-image-20 ml-2" alt="discussions"/>
                            </div>
                            <div className="col-10 pt-1">
                                GPT
                            </div>
                        </div>
                    </div>


                </div>

                {/* message preview tabulation */}
                <div className="col-10 tab">
                    <div className="border-left border-primary row sub-tab-header p-1">
                        { this.state.tabTitle }
                    </div>
                    <div className="row sub-tab-body">
                        <Discussion />
                    </div>
                </div>
            </div>
        return mainPage
    }
}

export default Home
