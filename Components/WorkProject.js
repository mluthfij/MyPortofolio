import styles from '../styles/Work.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faTelegramPlane } from "@fortawesome/free-brands-svg-icons"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'
import { HStack, Tag, TagLabel, Tooltip, Button, Box, Flex, Text } from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react"
import { useState } from 'react';
import Image from 'next/image';
import { useSwipeable } from "react-swipeable";

const WorkProject = ({ currentTheme, project, id }) => {
  const toast = useToast();
  const [index, setIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const maxVisibleTags = 3;

  const showGitToast = () => {
    toast({
      description: "Sorry, this project has a private repository!",
      status: "info",
      isClosable: true,
    })
  }

  const showProjToast = () => {
    toast({
      description: "Sorry, this project has not been deployed yet!",
      status: "info",
      isClosable: true,
    })
  }

  const ahead = () => {
    if (index === project.photo.length-1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const back = () => {
    if (index === 0) {
      setIndex(project.photo.length-1)
    } else {
      setIndex(index - 1)
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => ahead(),
    onSwipedRight: () => back()
  });

  return (
    <div className={styles.parentofparentcard} style={{ justifyContent: id % 2 === 0 ? 'flex-start' : 'flex-end' }}>
      <div className={styles.parentcard}>
        <div className={styles.cardtitle}>
          <h1 className={styles.projtitle}>{project.name}</h1>
          <Box width="45%" overflowX="hidden">
            <Flex align="center" gap={2} flexWrap="nowrap" justifyContent="flex-end">
              <Box 
                overflowX="auto" 
                css={{
                  '&::-webkit-scrollbar': {
                    display: 'none'
                  },
                  '-ms-overflow-style': 'none',
                  'scrollbarWidth': 'none',
                  'whiteSpace': 'nowrap'
                }}
                width={isExpanded ? "fit-content" : "fit-content"}
              >
                <HStack spacing={2} display="inline-flex">
                  {project.tech.slice(0, isExpanded ? project.tech.length : maxVisibleTags).map((tech) => (
                    <Tag 
                      key={tech} 
                      size="sm" 
                      borderRadius="md" 
                      variant="subtle" 
                      colorScheme={currentTheme.name === 'light' ? "cyan" : "purple"}
                    >
                      <Text as="span">{tech}</Text>
                    </Tag>
                  ))}
                </HStack>
              </Box>
              {project.tech.length > maxVisibleTags && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsExpanded(!isExpanded)}
                  padding={1}
                  height="24px"
                  minW="auto"
                  flexShrink={0}
                  leftIcon={<FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />}
                  color={currentTheme.subtext}
                >
                  {isExpanded ? 'Less' : `+${project.tech.length - maxVisibleTags}`}
                </Button>
              )}
            </Flex>
          </Box>
        </div>
        <div className={styles.imageandsocials}>
          <div className={styles.card} {...handlers} style={{ borderColor: currentTheme.footerColor, position: 'relative' }}>
            <Image src={project.photo[index]} alt='thumbnail image' height='300' width='1000' />
            <button onClick={back} style={{position: 'absolute', top: '50%', left: '10px', color: 'black', fontSize: '20px'}}>&lt;</button>
            <button onClick={ahead} style={{position: 'absolute', top: '50%', right: '10px', color: 'black', fontSize: '20px'}}>&gt;</button>
          </div>
          <div>
            <Box className={styles.socialIcon} style={{ color: currentTheme.subtext, borderColor: currentTheme.subtext }}>
              <Tooltip label="Github link" placement="right" hasArrow>
                {project.githubLink !== '' ? 
                  <Link href={project.githubLink}><FontAwesomeIcon icon={faGithubAlt} /></Link> : 
                  <Box as="span" cursor="pointer" onClick={showGitToast}><FontAwesomeIcon icon={faGithubAlt} /></Box>
                }
              </Tooltip>
            </Box>
            <Box className={styles.socialIcon} style={{ color: currentTheme.subtext, borderColor: currentTheme.subtext }}>
              <Tooltip label="Project link" placement="right" hasArrow>
                {project.projectLink !== '' ? 
                  <Link href={project.projectLink}><FontAwesomeIcon icon={faTelegramPlane} /></Link> : 
                  <Box as="span" cursor="pointer" onClick={showProjToast}><FontAwesomeIcon icon={faTelegramPlane} /></Box>
                }
              </Tooltip>
            </Box>
          </div>
        </div>
        <div className={styles.cardbottom}>
          <p className={styles.projdescription}>{project.description}</p>
        </div>
      </div>
    </div>
  )
}

export default WorkProject
