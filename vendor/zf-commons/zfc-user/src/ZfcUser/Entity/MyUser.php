<?php

namespace ZfcUser\Entity;


class MyUser extends User
{
  
    /**
     * @var string
     */
    protected $ville;

    /**
     * Get ville.
     *
     * @return string
     */
    public function getVille()
    {
        return $this->ville;
    }

    /**
     * Set ville.
     *
     * @param string $password
     * @return UserInterface
     */
    public function setVille($ville)
    {
        $this->ville = $ville;
        return $this;
    }

 
}
