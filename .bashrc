parse_git_branch() {
 git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}

# PS1=$(tput bold)
PS1='\[\033[92m\]\u@\h\[\033[00m\]:\[\033[94m\]\W\[\033[00m\]\[\033[93m\]$(parse_git_branch)\033[0m\]\$ ';

# some aliases
alias c='clear';
alias ed='cd /d/Desktop/Education/';