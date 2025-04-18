"use client"

import { useRef, useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  Briefcase,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Dribbble,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  MapPin,
  Twitter,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Function to render the appropriate social icon
const getSocialIcon = (platform) => {
  switch (platform) {
    case "twitter":
      return <Twitter className="h-4 w-4" />
    case "linkedin":
      return <Linkedin className="h-4 w-4" />
    case "github":
      return <Github className="h-4 w-4" />
    case "dribbble":
      return <Dribbble className="h-4 w-4" />
    case "medium":
      return <ExternalLink className="h-4 w-4" />
    default:
      return <ExternalLink className="h-4 w-4" />
  }
}

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-lg border bg-background/50 p-3 hover:bg-background transition-colors duration-200">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-medium text-sm">{project.name}</h4>
        <Badge
          variant="outline"
          className={cn(
            "text-xs",
            project.status === "Completed"
              ? "bg-green-500/10 text-green-600"
              : project.status === "In Progress"
                ? "bg-amber-500/10 text-amber-600"
                : "bg-blue-500/10 text-blue-600",
          )}
        >
          {project.status}
        </Badge>
      </div>
      <p className="text-xs text-muted-foreground">{project.description}</p>
    </div>
  )
}

// Team Member Card Component
const TeamMemberCard = ({ member }) => {
  // Generate department color
  const getDepartmentColor = (department) => {
    switch (department) {
      case "Leadership":
        return "bg-purple-500"
      case "Design":
        return "bg-rose-500"
      case "Marketing":
        return "bg-amber-500"
      case "Development":
        return "bg-emerald-500"
      default:
        return "bg-primary"
    }
  }

  const departmentColor = getDepartmentColor(member.department)

  return (
    <div className="group relative rounded-xl border bg-background transition-all duration-300 mb-0 overflow-hidden h-full">
      {/* Department color indicator */}
      <div className={`h-1.5 w-full ${departmentColor}`}></div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left column - Image and basic info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative mb-4 w-32 h-32 overflow-hidden rounded-lg border shadow-sm group-hover:shadow-md transition-all duration-300">
              <Image
                src={member.image || "/placeholder.svg"}
                width={128}
                height={128}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className={`absolute bottom-0 left-0 right-0 h-1.5 ${departmentColor}`}></div>
            </div>

            <div className="flex flex-col items-center md:items-start mb-4">
              <h3 className="text-xl font-bold text-center md:text-left">{member.name}</h3>
              <p className="text-muted-foreground text-sm">{member.role}</p>
              <Badge variant="outline" className={`mt-2 ${departmentColor.replace("bg-", "bg-opacity-10 text-")}`}>
                {member.department}
              </Badge>
            </div>

            <div className="flex space-x-2 mb-4">
              {member.socialLinks &&
                Object.entries(member.socialLinks).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  >
                    {getSocialIcon(platform)}
                  </a>
                ))}
            </div>

            <div className="space-y-2 text-sm text-muted-foreground w-full">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{member.location}</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="h-4 w-4 mr-2" />
                <span>{member.education}</span>
              </div>
            </div>
          </div>

          {/* Middle column - Bio and skills */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2">About</h4>
              <p className="text-muted-foreground mb-4">{member.bio}</p>


            </div>

            <div className="mb-4">
              <h4 className="text-sm font-bold text-muted-foreground mb-2">Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, i) => (
                  <Badge key={i} variant="outline" className="bg-primary/5">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Current projects preview */}
            <div>
              <h4 className="text-sm font-bold text-muted-foreground mb-2 flex items-center">
                <Briefcase className="h-4 w-4 mr-2 text-primary" />
                Current Projects
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {member.projects.slice(0, 2).map((project, idx) => (
                  <ProjectCard key={idx} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TeamMemberSwiper({ teamMembers, activeFilter = "All" }) {
  // Filter team members based on active filter
  const filteredTeamMembers =
    activeFilter === "All" ? teamMembers : teamMembers.filter((member) => member.department === activeFilter)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const autoPlayRef = useRef(null)

  // Handle navigation
  const goToSlide = (index) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500) // Match this with the CSS transition duration
  }

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + filteredTeamMembers.length) % filteredTeamMembers.length
    goToSlide(newIndex)
  }

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % filteredTeamMembers.length
    goToSlide(newIndex)
  }

  // Auto play functionality
  useEffect(() => {
    autoPlayRef.current = () => {
      goToNextSlide()
    }
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    const interval = setInterval(play, 7000)
    return () => clearInterval(interval)
  }, [])

  // Reset current index when filtered members change
  useEffect(() => {
    setCurrentIndex(0)
  }, [filteredTeamMembers])

  if (filteredTeamMembers.length === 0) {
    return <div className="text-center py-10">No team members found for this department.</div>
  }

  return (
    <div className="relative">
      {/* Swiper container */}
      <div className="overflow-hidden">
        <div
          className="transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)`, display: "flex" }}
        >
          {filteredTeamMembers.map((member) => (
            <div key={member.id} className="w-full flex-shrink-0">
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation and pagination container */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 border">
          {/* Previous button */}
          <button
            onClick={goToPrevSlide}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-background border border-border hover:bg-primary/10 hover:text-primary transition-colors"
            disabled={isTransitioning}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Pagination dots */}
          <div className="flex space-x-2 mx-2">
            {filteredTeamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? "bg-primary" : "bg-primary/30"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={goToNextSlide}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-background border border-border hover:bg-primary/10 hover:text-primary transition-colors"
            disabled={isTransitioning}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
