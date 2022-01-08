import ReactPlayer from "react-player"
import { useState,useRef } from "react";
import './style.css'
import  VolumeOff  from "@material-ui/icons/VolumeOff";
import Popover from '@material-ui/core/popover';
import React from "react";
import { Bookmark } from "@material-ui/icons"
import { makeStyles, styled } from '@material-ui/core/styles'
import { Grid, Typography } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import FastRewind from "@material-ui/icons/FastRewind"
import FastForward from "@material-ui/icons/FastForward"
import PlayArrow from "@material-ui/icons/PlayArrow"
import Pause from "@material-ui/icons/Pause"
import mergeClasses from "@material-ui/styles"
import Slider from "@material-ui/core/slider"
import Tooltip from "@material-ui/core/Tooltip"
import { grey } from "@material-ui/core/colors"
import VolumeUp from "@material-ui/icons/VolumeUp"
import Fullscreen from "@material-ui/icons/Fullscreen"
const useStyles = makeStyles({
    playerWrapper: {
        position: "relative"

    },
    controlsWrapper: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0,6)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        zIndex: 1
    },
    controlIcons: {
        color: "#777",
        fontSize: 50,
        transform: "scale(0.9)", "&:hover": {
            color: "#fff",
            transform: "scale(1)"
        },
        bottomIcon: {
            color: "white", "&:hover": { color: "grey" }
        },

    },
    volumeSlider: {
        width: 100,
    }
})
function ValueLabelComponent(props) {
    const { children, value } = props;

    return (
        <Tooltip enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

const PrettoSlider = styled(Slider)({
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#52af77',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});
const Video = () => {
const [state,setState]=useState({
    playing:true,
    muted:true,volume:0.5,
    playbackRate:1.0,
    played:0,
    seeking:false,
    variable:0,


})
const {playing,muted,volume,playbackRate,played,seeking}=state
const playerContainerRef=useRef(null);

const playerRef=useRef(null)

const handlePlayPause=()=>{
    setState({...state,playing:!state.playing})
}
const handleRewind=()=>{
    playerRef.current.seekTo(playerRef.current.getCurrentTime()-10)
}
const handleForward=()=>{

 playerRef.current.seekTo(playerRef.current.getCurrentTime()+10)
}
const handleMute=()=>{
    setState({...state,muted:!state.muted})
}
const onVolumeChange=(e,newValue)=>{
    setState({
        ...state,
        volume:parseFloat(newValue/100),
        muted:newValue===0 ?true:false,
    })


}
const onVolumeSeekUp=(e,newValue)=>{
    setState({
        ...state,
        volume:parseFloat(newValue/100),
        muted:newValue===0 ?true:false,
    })

}
const handlePlaybackRateChange=(rate)=>{
    setState({...state,playbackRate:rate})

}
const toggleFullScreen=()=>{
}
const handleProgress=(changeState)=>{
    setState({...state,...changeState})


}
const onSeek=(e,newValue)=>{
    setState({...state,played:parseFloat(newValue/100)})
}
const onSeekMouseDown=(e)=>{
setState({...state,seeking:true})
}
const onSeekMouseUp=(e,newValue)=>{
    setState({...state,seeking:false})
    playerRef.current.seekTo(newValue/100);
}



    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopover = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'playbackrate-popover' : undefined;
    return (
        <div ref={playerContainerRef} className={classes.playerWrapper}>
            <ReactPlayer
            ref={playerRef}
                muted={muted}
                seeking={seeking}
                playing={playing}
                volume={volume}
                playbackRate={playbackRate}
                onProgress={handleProgress}
                width={750}
                height={500}
                className="responsive-iframe1"
                url='https://youtu.be/4UZrsTqkcW4' />

            <div className={classes.controlsWrapper}>
                <Grid container direction="row" alignItems="center" justify='space-between' style={{ padding: 16 }}>
                    <Grid item>
                        <Typography variant="h5" style={{ color: "#fff" }}></Typography>
                    </Grid>
                    <Grid item>
                        <button
                            variant='contained'
                            color="primary"
                            startIcon={Bookmark}>
                        </button>
                    </Grid>
                </Grid>

                {/* middle */}

                <Grid container direction="row" alignItems="center" justify="center">
                    <IconButton className={classes.controlIcons} aria-label="require">
                        <FastRewind onClick={handleRewind} fontSize="inherit" />
                    </IconButton>

                    <IconButton onClick={handlePlayPause} className={classes.controlIcons} aria-label="require">
                       {playing?( <Pause fontSize="inherit"/>): (<PlayArrow fontSize="inherit" />)}
                    </IconButton>

                    <IconButton onClick={handleForward} className={classes.controlIcons} aria-label="require">
                        <FastForward fontSize="inherit" />
                    </IconButton>


                </Grid>


                {/* bottom */}



                <Grid container direction="row" justify="space-between" alignItems="center" style={{ padding: 16, }}>

                    <PrettoSlider
                        min={0}
                        max={100}
                        value={played*100}
                        onChange={onSeek}
                        onMouseDown={onSeekMouseDown}
                        onChangeCommitted={onSeekMouseUp}
                        ValueLabelComponent={ValueLabelComponent}
                    />
                    <Grid container direction="row" justify="space-between" alignItems="center" style={{ "background-color": "blue", height: "45px", overflow: "hidden" }}>


                        <Grid item >
                            <Grid container alignItems="center" direction="row" >
                                <IconButton className={classes.bottomIcon}>
                                   {playing? (<Pause fontSize="inherit"/>):(<PlayArrow onClick={handlePlayPause} fontSize="inherit" />)}
                                </IconButton>
                                <IconButton onClick={handleMute} className={classes.bottomIcon}>
                                  {muted?(<VolumeOff fontSize="large"/>
                                  ) :(
                                      <VolumeUp fontSize="large" />
                                      )}

                                </IconButton>

                                <Slider 
                                onChange={onVolumeChange}
                                onChangeCommitted={onVolumeSeekUp}
                                min={0}
                                 max={100} 
                                 value={volume*100}
                                 className={classes.volumeSlider} />

                                <Button variant="text"
                                    style={{ color: "white", marginLeft: "200" }}>
                                    <Typography>05:05</Typography>
                                </Button>



                            </Grid>

                        </Grid>
                        <Grid item >
                            <Button onClick={handlePopover} varient="text" className={classes.bottomIcon}>
                                <Typography>{playbackRate}X</Typography>
                            </Button>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                <Grid container direction="column">
                                    {[0.5, 1, 1.5, 2].map((rate) => (<Button onClick={()=>handlePlaybackRateChange(rate)} variant="text">
                                        <Typography color={rate===playbackRate?"secondary":"default"}>{rate}</Typography>
                                    </Button>))}
                                </Grid>
                            </Popover>
                            <IconButton onClick={toggleFullScreen} className={classes.bottomIcon}>
                                <Fullscreen fontSize="large" />

                            </IconButton>

                        </Grid>
                    </Grid>


                </Grid>





            </div>
        </div>
    )
}
export default Video