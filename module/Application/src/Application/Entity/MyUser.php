<?php
use ZfcUser\Entity;
namespace Application\Entity;


class MyUser extends \ZfcUser\Entity\User
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
