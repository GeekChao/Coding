class Singleton {
    private static instance: Singleton;

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() { }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    /**
     * Finally, any singleton should define some business logic, which can be
     * executed on its instance.
     */
    public someBusinessLogic() {
        // ...
    }
}

//Example:
class ConfigureVals{
    private static instance: ConfigureVals
    private xPoint: number
    private yPoint: number
    private shape: string

    private constructor({ xPoint = 0, yPoint = 0, shape = null }) {
        this.xPoint = xPoint
        this.yPoint = yPoint
        this.shape = shape
    }

    public static getConfiguration(configs) {
        if (!ConfigureVals.instance)
            ConfigureVals.instance = new ConfigureVals(configs)
        
        return ConfigureVals.instance
    } 
}