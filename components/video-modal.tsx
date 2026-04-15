"use client"

import { X, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Maximize, Settings } from "lucide-react"
import { Dialog, DialogContent, DialogPortal, DialogOverlay } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useState, useRef, useEffect } from "react"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  videoUrl?: string
  onPrevious?: () => void
  onNext?: () => void
  hasPrevious?: boolean
  hasNext?: boolean
}

export function VideoModal({
  isOpen,
  onClose,
  title,
  videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4",
  onPrevious,
  onNext,
  hasPrevious = false,
  hasNext = false,
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }, [isOpen])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleSeek = (value: number[]) => {
    if (videoRef.current) {
      videoRef.current.currentTime = value[0]
      setCurrentTime(value[0])
    }
  }

  const handleVolumeChange = (value: number[]) => {
    if (videoRef.current) {
      videoRef.current.volume = value[0]
      setVolume(value[0])
      setIsMuted(value[0] === 0)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoRef.current.requestFullscreen()
      }
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogPortal>
        <DialogOverlay />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="bg-background w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-primary px-4 py-3 flex items-center justify-between">
              <h3 className="text-primary-foreground font-medium truncate pr-4">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Player Area */}
            <div className="relative bg-black">
              {/* Alternate Player Link */}
              <div className="absolute top-2 left-2 right-2 z-10 text-sm text-muted-foreground bg-background/90 px-3 py-2 rounded">
                If facing issues with video:{" "}
                <button className="text-primary hover:underline">
                  Switch to Alternate Player
                </button>
              </div>

              {/* Video Container with Navigation */}
              <div className="relative flex items-center">
                {/* Previous Button */}
                {hasPrevious && (
                  <button
                    onClick={onPrevious}
                    className="absolute left-4 z-10 w-12 h-12 rounded-full bg-muted/80 hover:bg-muted flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-muted-foreground" />
                  </button>
                )}

                {/* Video */}
                <video
                  ref={videoRef}
                  className="w-full aspect-video"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Next Button */}
                {hasNext && (
                  <button
                    onClick={onNext}
                    className="absolute right-4 z-10 w-12 h-12 rounded-full bg-muted/80 hover:bg-muted flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-muted-foreground" />
                  </button>
                )}

                {/* Center Play Button Overlay */}
                {!isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-colors">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </div>
                  </button>
                )}
              </div>

              {/* Custom Controls */}
              <div className="bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
                {/* Progress Bar */}
                <Slider
                  value={[currentTime]}
                  max={duration || 100}
                  step={0.1}
                  onValueChange={handleSeek}
                  className="mb-3"
                />

                <div className="flex items-center justify-between">
                  {/* Left Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="text-white hover:text-primary transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6" />
                      ) : (
                        <Play className="w-6 h-6" />
                      )}
                    </button>

                    <span className="text-white text-sm">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  {/* Right Controls */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={toggleMute}
                        className="text-white hover:text-primary transition-colors"
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5" />
                        ) : (
                          <Volume2 className="w-5 h-5" />
                        )}
                      </button>
                      <Slider
                        value={[isMuted ? 0 : volume]}
                        max={1}
                        step={0.1}
                        onValueChange={handleVolumeChange}
                        className="w-20"
                      />
                    </div>

                    <button className="text-white hover:text-primary transition-colors">
                      <Settings className="w-5 h-5" />
                    </button>

                    <button
                      onClick={toggleFullscreen}
                      className="text-white hover:text-primary transition-colors"
                    >
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogPortal>
    </Dialog>
  )
}
